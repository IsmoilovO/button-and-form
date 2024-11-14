
import './button2.css'

export const UserForm = (

) => {
    const saveNewUserData = () => {

    }
    return (
        <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <button
                className="blue"
                onClick={() => {
                    saveNewUserData();
                }}
            >
                Submit
            </button>
        </form>
    );
}

export default UserForm