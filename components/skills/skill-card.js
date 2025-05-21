export default function SkillCard({ name }) {
  return (
    <div className="flex items-center p-3 rounded-md bg-secondary/50 hover:bg-secondary transition-colors">
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}