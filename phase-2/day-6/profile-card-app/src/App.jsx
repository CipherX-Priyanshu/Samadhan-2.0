import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Study Buddy Profiles</h1>
      <div className="card-container">
        <ProfileCard
          name="Anshul Singh"
          college="SISTec"
          exam="JEE"
          imageUrl="https://media.istockphoto.com/id/666545062/vector/default-placeholder-profile-icon.jpg?s=612x612&w=0&k=20&c=P32BmKi4BsB4JhhoCahTXhwBA0B6HgJ3AroWHyuM8N8="
        />
        <ProfileCard
          name="Komalika Agrawal"
          college="IIT Delhi"
          exam="CAT"
          imageUrl="https://thumbs.dreamstime.com/b/profile-placeholder-default-female-avatar-profile-placeholder-default-female-avatar-eps-file-easy-to-edit-125707173.jpg"
        />
        <ProfileCard
          name="Arpita Bais"
          college="NIT Bhopal"
          exam="GATE"
          imageUrl="https://thumbs.dreamstime.com/b/profile-placeholder-default-avatar-profile-placeholder-default-avatar-eps-file-easy-to-edit-124558533.jpg"
        />
      </div>
    </div>
  );
}

export default App;