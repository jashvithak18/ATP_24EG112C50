import User from "./User";
function UsersList() {
  const users = [
    {
      name: "Aarav Sharma",
      email: "aarav.sharma@mail.com",
      image: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      name: "Vivaan Patel",
      email: "vivaan.patel@mail.com",
      image: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
      name: "Aditya Singh",
      email: "aditya.singh@mail.com",
      image: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      name: "Sai Kumar",
      email: "sai.kumar@mail.com",
      image: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
      name: "Rohan Reddy",
      email: "rohan.reddy@mail.com",
      image: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      name: "Ananya Gupta",
      email: "ananya.gupta@mail.com",
      image: "https://randomuser.me/api/portraits/women/11.jpg"
    },
    {
      name: "Isha Verma",
      email: "isha.verma@mail.com",
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      name: "Priya Nair",
      email: "priya.nair@mail.com",
      image: "https://randomuser.me/api/portraits/women/13.jpg"
    },
    {
      name: "Sneha Das",
      email: "sneha.das@mail.com",
      image: "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
      name: "Kavya Iyer",
      email: "kavya.iyer@mail.com",
      image: "https://randomuser.me/api/portraits/women/15.jpg"
    }
  ];

  return (
    <div className="users-container">
      {users.map((user, index) => (
        <User key={index} {...user} />
      ))}
    </div>
  );
}

export default UsersList;
