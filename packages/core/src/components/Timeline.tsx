import React from 'react';
import { motion } from 'framer-motion';

export interface TimelineItem {
  title: string;
  description?: string;
  date?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => (
  <div className="relative pl-6 border-l border-gray-200 dark:border-gray-800">
    {items.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <div className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full bg-black dark:bg-white" />
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {item.title}
        </h3>
        {item.date && (
          <span className="text-sm text-gray-500">{item.date}</span>
        )}
        {item.description && (
          <p className="mt-1 text-gray-700 dark:text-gray-300">
            {item.description}
          </p>
        )}
      </motion.div>
    ))}
  </div>
);
