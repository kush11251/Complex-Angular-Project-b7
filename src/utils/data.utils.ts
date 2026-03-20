// Data utils
export function parseData(data: any): User[] {
  return data.map((item: any) => ({ id: item.id, name: item.name, email: item.email }));
}