type DirectoryPathProps = {
  path: string;
  className?: string;
};

export default function DirectoryPath({ path, className }: DirectoryPathProps) {
  return (
    <span className={className}>
      <span className="text-accent">/</span>
      {path}
    </span>
  );
}
