const ALPHABET_SIZE = 26;

class TrieNode {
  isEndOfWord: boolean;
  children: (TrieNode | null)[];
  constructor() {
    this.isEndOfWord = false;
    this.children = new Array(ALPHABET_SIZE);
    for (let i = 0; i < ALPHABET_SIZE; i++) {
      this.children[i] = null;
    }
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    const length = word.length;
    let index: number;
    let currentNode: TrieNode = this.root;

    for (var level = 0; level < length; level++) {
      index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);
      if (currentNode.children[index] == null) {
        currentNode.children[index] = new TrieNode();
      }
      currentNode = currentNode.children[index]!;
    }

    currentNode.isEndOfWord = true;
  }

  search(word: string): boolean {
    const length = word.length;
    let index: number;
    let currentNode: TrieNode = this.root;

    for (var level = 0; level < length; level++) {
      index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);

      if (currentNode.children[index] == null)
        return false;

      currentNode = currentNode.children[index]!;
    }

    return currentNode.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    const length = prefix.length;
    let index: number;
    let currentNode: TrieNode = this.root;

    for (var level = 0; level < length; level++) {
      index = prefix[level].charCodeAt(0) - 'a'.charCodeAt(0);

      if (currentNode.children[index] == null)
        return false;
      currentNode = currentNode.children[index]!;
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */