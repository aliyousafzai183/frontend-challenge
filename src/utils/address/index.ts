import Fuse from 'fuse.js';
import addresses from '../../data/addresses.json';

type Address = string;

const fuse = new Fuse<Address>(addresses as Address[], {
  includeScore: false,
  threshold: 0.3,
});

export function searchAddresses(query: string, limit = 5): string[] {
  if (!query) return [];
  return fuse
    .search(query)
    .slice(0, limit)
    .map((r) => r.item);
}
