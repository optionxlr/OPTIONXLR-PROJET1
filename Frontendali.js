git remote set-url origin https://github.com/OptionXLR/mon-boutique.git
export async function fetchProduits() {
  return [
    {
      productId: '001',
      nom: 'Mini projecteur LED',
      description: 'Projetez vos films partout, même en camping.',
      prix: 69.99,
      imageUrl: 'https://via.placeholder.com/400x300?text=Projecteur'
    },
    {
      productId: '002',
      nom: 'Caméra Wi-Fi 360°',
      description: 'Surveillez votre maison à distance.',
      prix: 49.99,
      imageUrl: 'https://via.placeholder.com/400x300?text=Caméra'
    },
    {
      productId: '003',
      nom: 'Montre connectée Pro+',
      description: 'Suivez votre santé avec style.',
      prix: 89.99,
      imageUrl: 'https://via.placeholder.com/400x300?text=Montre'
    }
  ]
}
