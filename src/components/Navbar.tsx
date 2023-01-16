import Link from "next/link";
import { Auth } from "aws-amplify";

interface NavLink {
    url: string;
    title: string;
}

interface NavbarProps {
    links: NavLink[];
}

export default function Navbar() {
    const signoutUser = async function () {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log("error signing out: ", error);
        }
    };

    return (
        <div
            className="flex-shrink-0 py-3 bg-light vh-100 position-fixed"
            style={{ width: "200px" }}
        >
            <div className="d-flex align-items-center pb-3 px-3 mb-3 link-dark text-decoration-none border-bottom">
                <span className="fs-5 fw-semibold">DevX</span>
            </div>

            <ul className="nav nav-pills flex-column mb-3 pb-3 border-bottom">
                <li>
                    <Link href="/docs" className="nav-link link-dark">
                        Docs
                    </Link>
                </li>
                <li>
                    <Link href="/docs/alt" className="nav-link link-dark">
                        Docs (without ISR)
                    </Link>
                </li>
            </ul>

            <ul className="nav nav-pills flex-column mb-auto mb-3 pb-3 border-bottom">
                <li>
                    <Link href="/todos" className="nav-link link-dark">
                        Todos (server)
                    </Link>
                </li>

                <li>
                    <Link href="/posts" className="nav-link link-dark">
                        Posts (client)
                    </Link>
                </li>

                <li>
                    <Link href="/protect" className="nav-link link-dark">
                        Protected Page (SSR)
                    </Link>
                </li>
            </ul>

            <ul className="nav nav-pills flex-column mb-auto mb-3 pb-3 border-bottom">
                <li>
                    <Link
                        href="#"
                        className="nav-link link-dark"
                        onClick={signoutUser}
                    >
                        Signout
                    </Link>
                </li>
            </ul>
        </div>
    );
}
