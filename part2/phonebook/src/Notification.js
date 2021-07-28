const Notification = ({ message, success = true }) => {
    if (message == null) return null;

    let classProp = success ? "msg success-msg" : "msg error-msg";
    return <div className={classProp}>{message}</div>;
};

export default Notification;
