import selfie from"../../Assets/Selfie.jpg"
const people = [
  {
    name: 'Jayanthram K',
    email: '22N225@psgtech.ac.in',
    role: 'Co-Founder / CEO / Front-End Developer ',
    imageUrl:"https://as2.ftcdn.net/v2/jpg/05/97/46/37/1000_F_597463789_8mfyr6Lz8JtbESp5ZYyR2XxFUZg6FyQQ.webp",
    lastSeen: null,
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Madhavan M',
    email: '22N229@psgtech.ac.in',
    role: 'Co-Founder / CTO / Back-End Developer',
    imageUrl:
    "https://as1.ftcdn.net/v2/jpg/06/01/17/18/1000_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"  ,  lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Agilan Ed',
    email: '22N204@psgtech.ac.in',
    role: 'Co-Founder / Figma Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null,
  },
  {
    name: 'Ajay Prakashan',
    email: '22N205@psgtech.ac.in',
    role: 'Co-Founder / Figma Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  {
    name: 'Harshavardhanaram A',
    email: '22N220@psgtech.ac.in',
    role: 'Co-Founder / Figma Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z',
  },
  
]

export default function Example() {
  return (
    <>
    <div className="flex mb-2 mt-16">
    <div className="text-5xl font-semibold ml-28 text-green-400">TripTactix </div>
    <div className="text-5xl font-semibold ml-2"> Team</div>
    </div>
    <div className="text-xl font-light ml-28 font-sans text-black mb-8 ">Behind Your Travel</div>
    
    <ul role="list" className="divide-y divide-gray-100 ml-28 mr-28">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}
