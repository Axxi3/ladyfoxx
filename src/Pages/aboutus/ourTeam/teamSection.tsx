import React from 'react';
import { LinkedinIcon } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  img: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Carter",
    title: "Co-Founder & AI Strategist",
    img: "https://placehold.co/283x300",
    linkedinUrl: "https://linkedin.com/in/alexcarter"
  },
  {
    id: 2,
    name: "Sophia Nguyen",
    title: "Head of Automation Engineering",
    img: "https://placehold.co/283x300",
    linkedinUrl: "https://linkedin.com/in/sophianguyen"
  },
  {
    id: 3,
    name: "Ryan Mitchell",
    title: "Lead Data Scientist",
    img: "https://placehold.co/283x300",
    linkedinUrl: "https://linkedin.com/in/ryanmitchell"
  }
];

const TeamSection: React.FC = () => {
  return (
    <section className=" py-8 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#2b5755] p-5  w-full  max-h-[370px] rounded-md"
            >
              <img src={member.img} alt={member.name} className="w-full h-64 object-cover rounded-lg mb-4" />

              <div className="flex justify-between items-start">
                <div className="">
                    <h4 className='text-[23px] font-medium'>{member.name}</h4>
                    <p className='text-[16px] text-white/60'>{member.title}</p>
                </div>

                <LinkedinIcon size={24}/>
                
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;