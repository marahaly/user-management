<div class="text-wrapper">
    <div class="title" data-content="404">
        403 - Access Denied
    </div>

    <div class="subtitle">
        Oops, You don't have permission to access this page.
    </div>
    
    <div class="buttons">
        <a class="button" href="{{route('dashboard')}}">Go to homepage</a>
    </div>
</div>

<style>
    @import url(https://fonts.googleapis.com/css?family=Raleway:700);

    *, *:before, *:after {
    box-sizing: border-box;
    }
    html {
        height: 100%;
    }
    body {
        font-family: 'Raleway', sans-serif;
        background-color: #342643; 
        height: 100%;
        padding: 10px;
    }

    a {
    color: #EE4B5E !important;
    text-decoration:none;
    }
    a:hover {
    color: #FFFFFF !important;
    text-decoration:none;
    }

    .text-wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .title {
        font-size: 4em;
        font-weight: 700;
        color: #EE4B5E;
    }

    .subtitle {
        font-size: 32px;
        font-weight: 700;
        color: #1FA9D6;
    }
    .isi {
        font-size: 18px;
        text-align: center;
        margin:30px;
        padding:20px;
        color: white;
    }
    .buttons {
        margin: 30px;
        font-weight: 700;
        border: 2px solid #EE4B5E;
        text-decoration: none;
        padding: 15px;
        text-transform: uppercase;
        color: #EE4B5E;
        border-radius: 26px;
        transition: all 0.2s ease-in-out;
        display: inline-block;
            
        .buttons:hover {
            background-color: #EE4B5E;
            color: white;
            transition: all 0.2s ease-in-out;
        }
    }    
</style>