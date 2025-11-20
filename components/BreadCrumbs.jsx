
// 'use client';
// import { usePathname } from "next/navigation";
// import Link from "next/link";


// export default function BreadCrumbs() {
//   const pathname = usePathname();
//   const paths = pathname.split('/').filter(Boolean);
//   if(pathname === '/'){
//     return null ;
//   }

//   return (
//     <div className="w-full absolute ">
//       <div className="max-w-[1140px] mx-auto px-3 flex items-center space-x-2 mt-10">
//         <Link href='/' className="text-blue-600 hover:underline">Home</Link>
//         {paths.map((path, index) => {
//           const href = '/' + paths.slice(0, index + 1).join('/')
//           const isLast = index === paths.length - 1
//           return (
//             <li key={index} className="flex items-center space-x-2">
//               <span> /</span>
//               {isLast ? (
//                 <span className="text-amber-400 capitalize">{path}</span>
//               ) : (
//                 <Link href={href} className="text-blue-900 hover:underline capitalize">{path}</Link>
//               )}
//             </li>
//           )
//         })}
//       </div>
//     </div>
//   )
// };


'use client';
import { usePathname } from "next/navigation";
import Link from "next/link";

// Capitalize + format path names
function formatPath(str) {
  return str
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function BreadCrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  if (pathname === "/") return null;

  return (
    <nav aria-label="Breadcrumb">
      <div className="w-full bg-transparent py-4">
        <div className="max-w-[1140px] mx-auto px-3">
          <ul className="flex items-center space-x-2 text-sm">

            {/* Home */}
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>

            {/* Dynamic segments */}
            {paths.map((path, index) => {
              const href = "/" + paths.slice(0, index + 1).join("/");
              const isLast = index === paths.length - 1;

              return (
                <li key={index} className="flex items-center space-x-2">
                  <span>&lt;</span>

                  {isLast ? (
                    <span className="text-amber-500 font-medium capitalize">
                      {formatPath(path)}
                    </span>
                  ) : (
                    <Link
                      href={href}
                      className="text-blue-900 hover:underline capitalize"
                    >
                      {formatPath(path)}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
