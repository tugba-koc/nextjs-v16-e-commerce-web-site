import { Box, Coins, Gift, MessageCircle, Star } from "lucide-react";

export const PROFILE_TAB_DROPDOWN_MENUS = [
  {
    key: "orders",
    label: "Tüm Siparişlerim",
    icon: Box,
  },
  {
    key: "reviews",
    label: "Değerlendirmelerim",
    icon: Star,
  },
  {
    key: "messages",
    label: "Satıcı mesajlarım",
    icon: MessageCircle,
  },
  {
    key: "credits",
    label: "Krediler",
    icon: Coins,
  },
  {
    key: "lucky",
    label: "Şanslı çekiliş",
    icon: Gift,
  },
] as const;
