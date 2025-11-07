import csv

def process_csv(input_file, output_file):
    """
    Process CSV to split Name column into First Name and Last Name.
    Removes the duplicate first character from the first name.
    """
    with open(input_file, 'r', encoding='utf-8') as infile:
        reader = csv.DictReader(infile)
        
        # Get all fieldnames and prepare new ones
        fieldnames = reader.fieldnames
        # Insert First Name and Last Name after Name column
        name_index = fieldnames.index('Name')
        new_fieldnames = (
            fieldnames[:name_index + 1] + 
            ['First Name', 'Last Name'] + 
            fieldnames[name_index + 1:]
        )
        
        # Read all rows and process
        rows = []
        for row in reader:
            name = row.get('Name', '')
            
            # Split the name by whitespace
            name_parts = name.split()
            
            if len(name_parts) >= 2:
                # Remove first character from first word
                first_name = name_parts[0][1:] if len(name_parts[0]) > 1 else ''
                last_name = name_parts[1]
            elif len(name_parts) == 1:
                # Only one word, still remove first character
                first_name = name_parts[0][1:] if len(name_parts[0]) > 1 else ''
                last_name = ''
            else:
                first_name = ''
                last_name = ''
            
            row['First Name'] = first_name
            row['Last Name'] = last_name
            rows.append(row)
        
        # Write to output file with proper quoting
        with open(output_file, 'w', encoding='utf-8', newline='') as outfile:
            writer = csv.DictWriter(outfile, fieldnames=new_fieldnames, quoting=csv.QUOTE_ALL)
            writer.writeheader()
            writer.writerows(rows)
    
    print(f"Processed {len(rows)} rows")
    print(f"Output saved to: {output_file}")

if __name__ == "__main__":
    input_file = "small_firms.csv"
    output_file = "small_firm-processed.csv"
    
    process_csv(input_file, output_file)

