import Link from "next/link"

export default function TeamPage() {
  const teamMembers = [
    { name: "kanchan", role: "Frontend Developer and Backend Engineer" },
    { name: "arjun", role: "Backend Engineer" },
    { name: "simran", role: "UI Designer" },
  ];
  return (
    <div className="w-full py-10">
      <div className="max-w-[1140px] py-20 mx-auto px-3 ">
        <h1 className="xl:text-[64px] font-bold lg:text-5xl sm:text-4xl text-3xl leading-loose bg-gradient-to-b from-[#A854E9] to-[#4F91FC] bg-clip-text text-transparent">Our Team</h1>
        <p>Here’s the amazing team behind the project!</p>
        <br></br>
        <ul className="">
          {teamMembers.map((member) => (
            <li key={member.name}>
              <Link href={`/about/team/${member.name}`}>
                {member.name.charAt(0).toUpperCase() + member.name.slice(1)} — {member.role}
              </Link>
            </li>
          ))}
        </ul>
        <br></br>
        <br></br>
        <p>(creates this page only for to use nested dynamic route)</p>
      </div>
    </div>
  );
}