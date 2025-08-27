export function Footer() {
  return (
    <div className="w-full bg-foreground py-6 md:py-0 fixed bottom-0">
      <div className="p-4 w-full flex items-center justify-center">
        <div className="text-sm text-accent font-normal">
          build by
          <a href="http://github.com/97mams" className="underline">
            {" "}
            97mams
          </a>
        </div>
      </div>
    </div>
  );
}
