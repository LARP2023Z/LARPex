

# Acceptance test scenarios

## <span>Use case UC9:</span> Wyświetlenie listy wydarzeń

### <span>Scenario UC9/1:</span> Events that user has access to exist
<span>Given</span> User is logged in
<span>And</span> Events that user has access to exist
<span>When</span> List of events is requested
<span>Then</span> List of events in chronological order is displayed

### <span>Scenario UC9/2:</span> Events that user has access to don't exist
<span>Given</span> User is logged in
<span>And</span> Events that user has access to don't exist
<span>When</span> List of events is requested
<span>Then</span> System displays an empty list

## <span>Use case UC12:</span> Zapisanie się na wydarzenie

### <span>Scenario UC12/1:</span> Event with this id does not exist
<span>Given</span> User is logged in
<span>And</span> Event with supplied id does not exist
<span>When</span> Register to event is requested
<span>Then</span> System displays information that event does not exist

### <span>Scenario UC12/2:</span> Event exists but it is too late to register
<span>Given</span> User is logged in
<span>And</span> Event exists but is in a state in which registration is no longer possible due to time constraints
<span>When</span> Register to event is requested
<span>Then</span> System displays information about registration being no longer possible

### <span>Scenario UC12/3:</span> Event exists but player limit is reached
<span>Given</span> User is logged in
<span>And</span> Event exists but player limit is reached
<span>When</span> Register to event is requested
<span>Then</span> System displays information about the reached limit

### <span>Scenario UC12/4:</span> Event exists but payment was not successful
<span>Given</span> User is logged in
<span>And</span> Event exists
<span>When</span> Register to event is requested
<span>And</span> And there was a problem with payment verification
<span>Then</span> System displays information about unsuccessful payment

### <span>Scenario UC12/5:</span> Successful registration
<span>Given</span> User is logged in
<span>And</span> Event exists <span>When</span> Register to event is requested
<span>Then</span> System displays information about successful registration

## <span>Use case UC7:</span> Dokonaj płatności

### <span>Scenario UC7/1:</span> Event with this id does not exist
<span>Given</span> User is logged in
<span>And</span> Event exists
<span>When</span> User selects to pay for event
<span>Then</span> System redirects user to selected external payment service provider

<style>
    p {
    white-space: pre;
    }

    span {
        font-weight: 600;
        color: #922D50
    }
</style>