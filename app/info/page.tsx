import Link from "next/link";


export default function InfoPage() {

    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="flex flex-col max-w-100 items-center">
                <h1 className="text-5xl font-bold">Info</h1>
                <p>About the website</p>
                <div className="flex flex-col">
                    <p className="pt-10 text-sm">On this website you can enter the names of your friends and the program will randomly
                    choose one of them. This is very usefully for games like hide and seek where nobody wants to be the seeker.
                        By the way theres a cheat code where you can select who gets selected but don´t tell anyone. Just click on {<Link className="text-sm" href={"/?sus=true"}>this.</Link>}
                    The text after this is now nonsense so others think that the text is too long. On this website you can enter the names of your friends and the program will randomly
                        choose one of them. This is very usefully for games like hide and seek where nobody wants to be the seeker.
                        On this website you can enter the names of your friends and the program will randomly
                        choose one of them. This is very usefully for games like hide and seek where nobody wants to be the seeker.
                        On this website you can enter the names of your friends and the program will randomly
                        choose one of them. This is very usefully for games like hide and seek where nobody wants to be the seeker.
                        On this website you can enter the names of your friends and the program will randomly
                        choose one of them. This is very usefully for games like hide and seek where nobody wants to be the seeker.
                        On this website you can enter the names of your friends and the program will randomly
                        choose one of them. This is very usefully for games like hide and seek where nobody wants to be the seeker.
                        On this website you can enter the names of your friends and the program will randomly
                        choose one of them. This is very usefully for games like hide and seek where nobody wants to be the seeker.
                        On this website you can enter the names of your friends and the program will randomly
                        choose one of them. This is very usefully for games like hide and seek where nobody wants to be the seeker.
                        On this website you can enter the names of your friends and the program will randomly
                        choose one of them. This is very usefully for games like hide and seek where nobody wants to be the seeker.
                    </p>
                </div>
            </div>
        </div>
    )
}