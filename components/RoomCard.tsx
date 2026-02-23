'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, Wifi, Tv, ShowerHead, Home } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface RoomCardProps {
  room: {
    id: string;
    type: string;
    slug: string;
    capacity: number;
    description: string;
    price: number;
    amenities: string[];
    images: string[];
  };
}

const amenityIcons: Record<string, any> = {
  wifi: Wifi,
  tv: Tv,
  shower: ShowerHead,
  balcony: Home,
};

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <CardHeader className="p-0 relative h-64 overflow-hidden">
        <Image
          src={room.images[0]}
          alt={room.type}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <Badge className="absolute top-4 right-4 bg-orange-600 text-white border-none">
          ${room.price}/nuit
        </Badge>
      </CardHeader>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{room.type}</h3>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{room.capacity} pers.</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {room.description}
        </p>

        <div className="flex gap-2 mb-4">
          {room.amenities.map((amenity) => {
            const Icon = amenityIcons[amenity];
            return Icon ? (
              <div
                key={amenity}
                className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center"
              >
                <Icon className="w-4 h-4 text-orange-600" />
              </div>
            ) : null;
          })}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href={`/chambres/${room.slug}`} className="w-full">
          <Button className="w-full bg-orange-600 hover:bg-orange-700">
            Voir les détails
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
