export default function SkillCategory({ title, children }) {
  return (
    <div className="p-6 rounded-lg border">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {children}
      </div>
    </div>
  );
}