

# Acceptance test scenarios

## Use case UC9: Wyświetlenie listy wydarzeń

### Scenario UC9/1: Events that user has access to exist
Given:
- User is logged in
- Events that user has access to, exist
- Tester has shown the client that the database contains the shown entries
1. User clicks button with the label "Idź do /events"
2. System closes window "Placeholder dla strony index" 
3. System displays a window "Lista wydarzeń" with events chronologically sorted.
 

### Scenario UC9/2: Events that user has access to don't exist
Given:
- User is logged in
- Events that user has access to don't exist
- Tester has shown the client that the database has been dropped
1. User clicks button with the label "Idź do /events".
2. System closes window "Placeholder dla strony index" 
3. System displays a window "Lista wydarzeń" with no events.

### Scenario UC9/3: User exits event list.
Given:
- User is logged in
- User clicked a button with the label "Idź do/events".
- System displayed a window with events visible to the User chronologically sorted.
1. User clicks button with the label "Wróć".
2. System closes window "Lista wydarzeń"
3. System displays a window "Placeholder dla strony index".

## Use case UC12&U: Zapisanie się na wydarzenie

### Scenario UC12/1: Event exists but player limit is reached
Given:
- Event exists but player limit is reached
- User has interacted as described in *Scenario UC9/1*
1. User clicks a button with the label "Zapisz się"
2. System displays a window named "Brak miejsc" with text "Niestety na wybrane wydarzenie nie ma już wolnych miejsc.".
4. System closes the window named "Brak miejsc".
5. System displays a window named "Lista wydarzeń".

### Scenario UC12/2: Event exists but payment was not successful
Given:
- Event exists
- Event hasn't reached the max number of players
- User has interacted as described in *Scenario UC9/1*
0. User clicks a button with the label "Zapisz się"
1. User selects to pay for event
2. System displays a window named "Płatność" which contains a label "Kwota do zapłaty" with a price with currency code and a dropdown labeled "Metoda płatności" with possible payment methods.
3. User selects payment method from the "Metoda płatności" dropdown.
4. User clicks button with the label "Płatność".
5. System displays a window named "Niepowodzenie" with text "Płatność nie powiodła się. W wyniku niepowodzenia płatności nie zapisano na wydarzenie." with a button labeled "OK".
6. User clicks button labeled "OK".
7. System closes the window named "Niepowodzenie".
8. System displays a window named "Lista wydarzeń".

### Scenario UC12/3: Successful registration
Given:
- Event exists
- Event hasn't reached the max number of players
- User has interacted as described in *Scenario UC9/1*
0. User clicks a button with the label "Zapisz się"
1. User selects to pay for event
2. System displays a window named "Płatność" which contains a label "Kwota do zapłaty" with a price with currency code and a dropdown labeled "Metoda płatności" with possible payment methods.
3. User selects payment method from the "Metoda płatności" dropdown.
4. User clicks button with the label "Płatność".
5. System displays a window named "Powodzenie" with text "Płatność powiodła się" with a button labeled "OK".
6. System displays a window named "Success" with text "Operacja zakończyła się statusem: Success".
7. User clicks button labeled "OK".
8. System closes the window named "Success".
9. System displays a window named "Lista wydarzeń".