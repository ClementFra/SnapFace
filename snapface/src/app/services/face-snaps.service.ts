import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },
    {
      id: 2,
      title: 'My lovely cat',
      description: 'Mon tableau de coeur',
      imageUrl:
        'https://play-lh.googleusercontent.com/KZ50IUZyXv1O-aqkuEbHan-3JFg02N6lMa8d7exBHMhElgmY_A494lnP2n7RmUqxZ8yq',
      createdDate: new Date(),
      snaps: 0,
      location: 'Ma chambre',
    },
    {
      id: 3,
      title: 'My Muffin',
      description: 'Meilleur patisserie',
      imageUrl:
        'https://assets.afcdn.com/recipe/20221020/136482_w1024h1024c1cx3370cy2350.webp',
      createdDate: new Date(),
      snaps: 0,
      location: 'Mon ventre',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
