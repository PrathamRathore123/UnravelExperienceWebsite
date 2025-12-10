
import {FolderCard} from "./../ui/Folder";

export function MomentsDump() {
  return (
    <div className="w-full flex flex-col items-center py-12">
      {/* Header text */}
      <h1 className="text-2xl font-light text-center leading-snug text-gray-900">
        moments worth keeping the in-between moments. <br />
        the ones you didn't plan for.
      </h1>

      {/* Folder grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <FolderCard title="London Dump"  />
        <FolderCard title="Paris Dump" />
        <FolderCard title="New York Dump"  />
        <FolderCard title="Lapland Dump"  />
      </div>
    </div>
  );
}
