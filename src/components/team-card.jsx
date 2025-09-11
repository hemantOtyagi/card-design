const TeamCard = () => {
  return (
    <div className="flex items-center gap-4 rounded-xl cursor-pointer  border-outline bg-surface text-white p-4 shadow-xs shadow-white hover:shadow-md transition-shadow duration-100">
      {/* Avatar */}
      <div className="relative h-15 w-15 rounded-full overflow-hidden border border-outline-variant">
        <img
          src="https://images.unsplash.com/photo-1757351122506-3c6a394e9cd8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Team"
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <p className="text-title-medium font-semibold text-on-surface">
          Roshini Sharma
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
