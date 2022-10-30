function App() {
    return (
        <div>
            <Tweet
                name="Joe Blow"
                username="@JoeBlow"
                date={new Date().toDateString()}
                message="Anybody there??"
            />
            <Tweet
                name="Joanne Blower"
                username="@JoanneBlower"
                date={new Date().toDateString()}
                message="Is the server down??"
            />
            <Tweet
                name="Joe Biden"
                username="@JoeBiden"
                date={new Date().toDateString()}
                message="I don't know where I am.. Help?!"
            />
        </div>
    );
}