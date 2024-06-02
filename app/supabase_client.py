import os
from supabase.client import Client, ClientOptions

url = os.environ.get("SUPABASE_URL", "")
key = os.environ.get("SUPABASE_KEY", "")


def get_supabase() -> Client:
    client = Client(url, key, options=ClientOptions(flow_type="pkce"))
    return client
