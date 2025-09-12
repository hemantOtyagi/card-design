import TeamCardTwo from "./team-card-v1.2";


const teamData = [
  {
    avatar:
    "https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?q=80&w=687&auto=format&fit=crop",
    name: "Roshini Sharma",
    dialogTitle: "Reetu Yadav",
    dialogDescription:
    "Try to catch up to her pace on an uphill climb, I dare you, I double dare you. An accomplished mountaineer, Reetu's love for trekking and travelling started 8 years ago. From then onwards, she left her lucrative career as an electronic engineer and pursued her dream of travelling around the world. A good book, a campsite by the river and lots of dogs and puppies is what keeps her going. Don't forget to ask her to make a cup of masala chai and Maggi for you, it's delicious. 😃",
  },
  {
    avatar:
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=687&auto=format&fit=crop",
    name: "Aarav Mehta",
    dialogTitle: "Aarav Mehta",
    dialogDescription:
    "A tech enthusiast who swapped coding for hiking trails. Loves exploring hidden gems across the Himalayas and is always ready with a fun story around a campfire.",
  },
  {
    avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
    name: "Sanya Kapoor",
    dialogTitle: "Sanya Kapoor",
    dialogDescription:
    "An artist and photographer who finds inspiration in nature. Sanya captures breathtaking landscapes during her treks and loves painting under the stars.",
  },
  {
    avatar:
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop",
    name: "Kabir Singh",
    dialogTitle: "Kabir Singh",
    dialogDescription:
    "An adventure junkie with a knack for rock climbing and river rafting. Kabir believes that every mountain teaches resilience and every river teaches flow.",
  },
  {
    avatar:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=687&auto=format&fit=crop",
    name: "Ananya Verma",
    dialogTitle: "Ananya Verma",
    dialogDescription:
    "A foodie traveler who explores places not just for sights but also for flavors. Ananya has a secret recipe for travel vlogs and the best street food tips.",
  },
  {
    avatar:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=687&auto=format&fit=crop",
    name: "Rohan Malhotra",
    dialogTitle: "Rohan Malhotra",
    dialogDescription:
    "A storyteller and blogger who left the corporate grind to document his travels. Rohan is often found writing in cozy cafes or narrating tales by the campfire.",
  },
];

const TeamCardTwoContainer = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {teamData.map((member, idx) => (
        <TeamCardTwo
          key={idx}
          avatar={member.avatar}
          name={member.name}
          dialogTitle={member.dialogTitle}
          dialogDescription={member.dialogDescription}
        />
      ))}
    </div>
  )
}

export default TeamCardTwoContainer 
