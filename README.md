https://whitneym92.github.io/password_generator/


Created a responsive application that generates a random password based on user-selected criteria:
(Started with pseudo coding)
    
    1. To get started "click" generate password
    2. Set variables to assign them characters for the password
    3. Created a prompt to set the length of the password to be between 8-128 characters
    4. Started a while loop to run as long as length is between 8-128
    5. Created functions to execute the confirms for character choices
    6. Created a function to generate the password including a for loop that spits out the passcode with character parameters 
    7. Created an event listener


    ## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
