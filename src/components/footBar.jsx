import { Link } from "@nextui-org/link";

export default function FootBar() {
  return (
    <footer className="w-full py-3 flex justify-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-1 md:mb-0">
          <p className="text-xs">
            <span className="font-semibold">Course: </span>
            <Link
              isExternal
              href="https://sites.google.com/view/sjdmath/home?authuser=0"
              className="hover:underline text-xs text-current"
              title="Discrete Math Course"
            >
              Discrete Math
            </Link>
          </p>
        </div>

        <div className="mb-1 md:mb-0">
          <p className="text-xs">
            <span className="font-semibold">Website by: </span>
            <span>Ade Liu</span>
          </p>
        </div>

        <div className="mb-1 md:mb-0">
          <p className="text-xs">
            <span className="font-semibold">Contact: </span>
            <a
              href="mailto:dylan920901@gmail.com"
              className="hover:underline"
            >
              dylan920901@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-1 md:mt-0">
          <p className="text-xs text-default-500">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
