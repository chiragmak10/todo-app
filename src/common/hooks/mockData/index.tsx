import { createContext, useContext } from 'react'
import { noop } from 'lodash-es'
export interface SectionItemType {
  id: string
  taskName: string
}
export interface MockData {
  sectionType: string
  active: boolean
  sectionItems: SectionItemType[]
}

export const mockData: MockData[] = [
  {
    sectionType: 'personal',
    active: true,
    sectionItems: [] as SectionItemType[],
  },
]
export interface MockDataInterface {
  setMockData: React.Dispatch<React.SetStateAction<MockData[]>>
  mockData: MockData[]
}

const defaultData = {
  mockData: mockData,
  setMockData: noop,
}

export const MockDataContext = createContext<MockDataInterface>(defaultData)
export const useMockData = () => useContext(MockDataContext)
