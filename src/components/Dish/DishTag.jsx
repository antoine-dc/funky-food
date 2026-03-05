export default function DishTag({ tags }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 rounded-full text-xs font-bold"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
