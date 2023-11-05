

# Acceptance test scenarios

## Use case UC9: Wyświetlenie listy wydarzeń

### Scenario UC9/1: Events that user has access to exist
Given:
- User is logged in
- Events that user has access to, exist
1. User clicks button with the label "Wydarzenia"
2. System closes window "Menu główne aplikacji użytkownika" 
3. System displays a window "Lista wydarzeń" with events chronologically sorted.
 

### Scenario UC9/2: Events that user has access to don't exist
Given:
- User is logged in
- Events that user has access to don't exist
1. User clicks button with the label "Wydarzenia".
2. System closes window "Menu główne aplikacji użytkownika" 
3. System displays a window "Lista wydarzeń" with no events.

### Scenario UC9/3: User exits event list.
Given:
- User is logged in
- User clicked a button with the label "Wydarzenia".
- System displayed a window with events visible to the User chronologically sorted.
1. User clicks button with the label "Wróć".
2. System closes window "Lista wydarzeń"
3. System displays a window "Menu główne aplikacji użytkownika".

## Use case UC12: Zapisanie się na wydarzenie

### Scenario UC12/1: Event exists but player limit is reached
Given:
- Event exists but player limit is reached
1. User clicks a button with the label "Zapisz się"
2. System displays a window named "Brak miejsc" with text "Niestety na wybrane wydarzenie nie ma już wolnych miejsc.".
3. User clicks a button with the label "Ok.".
4. System closes the window named "Brak miejsc".
5. System displays a window named "Lista wydarzeń".

### Scenario UC12/2: Event exists but payment was not successful
Given:
- Event exists
- Event hasn't reached the max number of players
1. User clicks a button with the label "Zapisz się"
 the payment was not successful.
2. System displays a window named "Powodzenie" with text "W wyniku niepowodzenia płatności nie zapisano na wydarzenie.".
3. User clicks a button with the label "Ok.".
4. System closes the window named "Powodzenie".
5. System displays a window named "Lista wydarzeń".

### Scenario UC12/3: Successful registration
Given:
- Event exists
- Event hasn't reached the max number of players
1. User clicks a button with the label "Zapisz się"
2. System displays a window named "Niepowodzenie" with text "Z powodzeniem zapisano na wydarzenie".
3. User clicks a button with the label "Ok.".
4. System closes the window named "Niepowodzenie".
5. System displays a window named "Lista wydarzeń".

## Use case UC7: Dokonaj płatności

### Scenario UC7/1: Succesfull payment for Event participation
Given:
- Event exists
1. User selects to pay for event
2. System displays a window named "Płatność" which contains a label "Kwota do zapłaty" with a price with currency code and a dropdown labeled "Metoda płatności" with possible payment methods.
3. User selects payment method from the "Metoda płatności" dropdown.
4. User clicks button with the label "Płatność".
5. System redirects User to external payment system.
6. System displays a window named "Powodzenie" with text "Płatność powiodła się" with a button labeled "OK".
7. User clicks button labeled "OK".
8. System displays window "Okno z możliwością płatności".


### Scenario UC7/2: Unsuccesfull payment for Event participation
Given:
- Event exists
1. User selects to pay for event
2. System displays a window named "Płatność" which contains a label "Kwota do zapłaty" with a price with currency code and a dropdown labeled "Metoda płatności" with possible payment methods.
3. User selects payment method from the "Metoda płatności" dropdown.
4. User clicks button with the label "Płatność".
5. System redirects User to external payment system.
6. System displays a window named "Niepowodzenie" with text "Płatność nie powiodła się" with a button labeled "OK".
7. User clicks button labeled "OK".
8. System displays window "Okno z możliwością płatności".