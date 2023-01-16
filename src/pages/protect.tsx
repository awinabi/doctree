import { GetServerSideProps } from "next";
import { withSSRContext } from "aws-amplify";

type Props = {
    authenticated: boolean;
    username: string;
};

function Protected({ authenticated, username }: Props) {
    if (!authenticated) {
        return <h1>Not authenticated</h1>;
    }
    return (
        <div className="userdetail">
            <h1>
                Hello{" "}
                <span className="border-bottom border-primary border-4 text-primary">
                    {username}
                </span>
            </h1>
            <p className="desc">User fetched with SSR from Cognito</p>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { Auth } = withSSRContext(context);
    try {
        const user = await Auth.currentAuthenticatedUser();
        console.log("user: ", user);
        return {
            props: {
                authenticated: true,
                username: user.username,
            },
        };
    } catch (err) {
        return {
            props: {
                authenticated: false,
            },
        };
    }
};

export default Protected;
