import pywisetransfer as wise
import os

client = wise.Client(api_key=os.environ['WISE_API_KEY'], environment="live")

for profile in client.profiles.list():
    print(profile)
    accounts = client.borderless_accounts.list(profile_id=profile.id)
    for account in accounts:
        currencies = [(balance.currency, balance.amount.value) for balance in account.balances]
        print(f"AccountID={account.id}, Currencies={currencies}")