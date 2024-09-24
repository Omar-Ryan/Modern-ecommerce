type GridListProps<T> = {
  records: T[];
  renderItem: (records: T) => React.ReactNode;
};

type HashID = { id?: number };

const GridList = <T extends HashID>({
  records,
  renderItem,
}: GridListProps<T>) => {
  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <div
            key={record.id}
            className="flex justify-center mt-2 mb-5 xs:columns-6 md:columns-3"
          >
            {renderItem(record)}
          </div>
        ))
      : "there are not categories ";
  return <>{categoriesList}</>;
};

export default GridList;
