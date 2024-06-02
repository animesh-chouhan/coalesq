from typing import Union

from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse, HTMLResponse

from supabase_client import get_supabase

app = FastAPI()
supabase = get_supabase()


@app.get("/", response_class=HTMLResponse)
def read_root():
    html = """
    <html>
    <head>
    <title>CoalesQ</title>
    </head>
    <body>
    <button onclick="window.location.href='/signin/google';">Login</button>
    </body>
    </html>
    """
    return html


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get("/signin/google", response_class=RedirectResponse)
def signin_google(request: Request):
    print(request.base_url)
    # https://dmedauqinsupdavxjdhz.supabase.co/auth/v1/callback
    res = supabase.auth.sign_in_with_oauth(
        {
            "provider": "google",
            "options": {"redirect_to": f"{request.base_url}callback"},
        }
    )
    print(res)
    return res.url


@app.get("/callback", response_class=RedirectResponse)
def callback(code: str = ""):
    if code:
        res = supabase.auth.exchange_code_for_session({"auth_code": code})
        print(res)
    return "/"


@app.post("/post-test", response_class=RedirectResponse)
def asdf():
    return "/"
