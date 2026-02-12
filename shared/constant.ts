import { Box, Coins, Gift, MessageCircle, Star } from "lucide-react";

export const PROFILE_TAB_DROPDOWN_MENUS = [
  {
    key: "orders",
    label: "Tüm Siparişlerim",
    icon: Box,
    link: "/orders",
  },
  {
    key: "reviews",
    label: "Değerlendirmelerim",
    icon: Star,
    link: "/comments",
  },
  {
    key: "messages",
    label: "Satıcı mesajlarım",
    icon: MessageCircle,
    link: "/messages",
  },
  {
    key: "credits",
    label: "Krediler",
    icon: Coins,
    link: "/credits",
  },
  {
    key: "lucky",
    label: "Şanslı çekiliş",
    icon: Gift,
    link: "/lucky",
  },
] as const;
