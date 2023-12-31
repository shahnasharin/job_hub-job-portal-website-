from twilio.rest import Client
from django.conf import settings


def send_otp(mobile):
    number = '+91' + str(mobile)
    print(number)
    account_sid = settings.TWILIO_ACCOUNT_SID
    auth_token = settings.TWILIO_AUTH_TOKEN
    service_id = settings.TWILIO_SERVICE_SID
    print(account_sid, auth_token, service_id)
    client = Client(account_sid, auth_token)

    verification = client.verify \
                        .services(service_id) \
                        .verifications \
                        .create(to= number , channel='sms')

    print(verification.status)
    return(verification.status)



def verify_otp(mobile,otp):

    number = '+91' + str(mobile)
    print(number, otp)
    account_sid = settings.TWILIO_ACCOUNT_SID
    auth_token = settings.TWILIO_AUTH_TOKEN
    service_id = settings.TWILIO_SERVICE_SID
    client = Client(account_sid, auth_token)

    verification_check = client.verify \
                            .services(service_id) \
                            .verification_checks \
                            .create(to=number, code=otp)

    print(verification_check.status)
    
    if verification_check.status == 'approved':
        print('Verification Conform')
        return True
    else:
        return False