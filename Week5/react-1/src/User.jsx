function User({ name, email, image }) {
  return (
    <div className="user-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{email}</p>
      <button>Profile</button>
    </div>
  );
}

export default User;
