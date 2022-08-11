import { MockData } from '../../../common/hooks/mockData';

export const reorder = (
  list: MockData[],
  startIndex: number,
  endIndex: number,
): MockData[] => {
  const result = list.find((x) => x.active)?.sectionItems ?? [];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return list;
};
