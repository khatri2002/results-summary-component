import {
  IconMemory,
  IconReaction,
  IconVerbal,
  IconVisual,
} from "../assets/images";
import { SummaryItems } from "./type";

export const summaryItems: SummaryItems = [
  {
    label: "Reaction",
    score: {
      value: 80,
      total: 100,
    },
    icon: {
      src: IconReaction,
      alt: "icon-reaction",
    },
    className: "reaction",
  },
  {
    label: "Memory",
    score: {
      value: 92,
      total: 100,
    },
    icon: {
      src: IconMemory,
      alt: "icon-memory",
    },
    className: "memory",
  },
  {
    label: "Verbal",
    score: {
      value: 61,
      total: 100,
    },
    icon: {
      src: IconVerbal,
      alt: "icon-verbal",
    },
    className: "verbal",
  },
  {
    label: "Visual",
    score: {
      value: 72,
      total: 100,
    },
    icon: {
      src: IconVisual,
      alt: "icon-visual",
    },
    className: "visual",
  },
];
