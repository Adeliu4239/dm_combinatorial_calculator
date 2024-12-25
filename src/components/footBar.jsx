import { Link } from "@nextui-org/link";

export default function FootBar() {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 flex justify-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            <span className="font-semibold">Course: </span>
            <Link
              isExternal
              href="https://sites.google.com/view/sjdmath/home?authuser=0"
              className="text-primary hover:underline"
              title="Discrete Math Course"
            >
              Discrete Math
            </Link>
          </p>
        </div>

        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            <span className="font-semibold">Website by: </span>
            <span>Ade Liu</span>
          </p>
        </div>

        <div className="mb-4 md:mb-0">
          <p className="text-sm">
            <span className="font-semibold">Contact: </span>
            <a
              href="mailto:dylan920901@gmail.com"
              className="text-primary hover:underline"
            >
              dylan920901@gmail.com
            </a>
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <p className="text-sm text-default-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
