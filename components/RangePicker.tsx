'use client';

import { useState } from 'react';
import { CalendarDays, X } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';

interface RangePickerProps {
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  onChange: (from: Date | undefined, to: Date | undefined) => void;
}

export function RangePicker({ checkIn, checkOut, onChange }: RangePickerProps) {
  const [open, setOpen] = useState(false);

  const selected =
    checkIn && checkOut
      ? { from: checkIn, to: checkOut }
      : checkIn
      ? { from: checkIn }
      : undefined;

  const handleSelect = (range: { from?: Date; to?: Date } | undefined) => {
    if (!range) {
      onChange(undefined, undefined);
    } else {
      onChange(range.from, range.to);
      if (range.from && range.to) {
        setOpen(false);
      }
    }
  };

  const label =
    checkIn && checkOut
      ? `${format(checkIn, 'd MMM', { locale: es })} → ${format(checkOut, 'd MMM yyyy', { locale: es })}`
      : checkIn
      ? `${format(checkIn, 'd MMM yyyy', { locale: es })} — elegir salida`
      : 'Seleccionar fechas';

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
        style={{
          background: 'var(--cream)',
          border: `1px solid ${open ? 'var(--terracotta)' : 'var(--cream-dark)'}`,
          borderRadius: '2px',
          fontFamily: "'Crimson Pro', serif",
          color: checkIn ? 'var(--warm-brown)' : 'var(--warm-brown-light)',
          fontSize: '15px',
        }}
      >
        <CalendarDays className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--terracotta)' }} />
        <span className="flex-1">{label}</span>
        {(checkIn || checkOut) && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              onChange(undefined, undefined);
            }}
            className="opacity-40 hover:opacity-100 transition-opacity"
          >
            <X className="w-3.5 h-3.5" />
          </span>
        )}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
          <div
            className="absolute left-0 z-40 mt-1 shadow-2xl p-2"
            style={{
              background: 'white',
              border: '1px solid var(--cream-dark)',
              borderRadius: '2px',
              borderTop: '3px solid var(--terracotta)',
            }}
          >
            <div
              className="px-4 pt-3 pb-0 text-xs text-center"
              style={{ color: 'var(--terracotta)', fontFamily: "'Crimson Pro', serif" }}
            >
              {!checkIn
                ? '① Haz clic en tu fecha de llegada'
                : !checkOut
                ? '② Haz clic en tu fecha de salida'
                : ''}
            </div>
            <Calendar
              mode="range"
              selected={selected}
              onSelect={handleSelect}
              disabled={{ before: new Date() }}
              locale={es}
              showOutsideDays={false}
              classNames={{
                months: 'flex flex-col space-y-4',
                month: 'space-y-4',
                caption: 'flex justify-center pt-1 relative items-center',
                caption_label: 'text-sm font-medium',
                nav: 'space-x-1 flex items-center',
                nav_button:
                  'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200',
                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',
                table: 'w-full border-collapse space-y-1',
                head_row: 'flex',
                head_cell:
                  'text-gray-500 rounded-md w-9 font-normal text-[0.8rem] dark:text-gray-400',
                row: 'flex w-full mt-2',
                cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-amber-50 [&:has([aria-selected])]:bg-amber-50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100 inline-flex items-center justify-center rounded-md text-sm ring-offset-white transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                day_range_end: 'day-range-end',
                day_selected:
                  'bg-amber-600 text-white hover:bg-amber-600 hover:text-white focus:bg-amber-600 focus:text-white',
                day_today: 'bg-amber-50 text-amber-900',
                day_outside:
                  'day-outside text-gray-400 opacity-50 aria-selected:bg-amber-50 aria-selected:text-gray-400 aria-selected:opacity-30',
                day_disabled: 'text-gray-400 opacity-50',
                day_range_middle: 'aria-selected:bg-amber-100 aria-selected:text-amber-900',
                day_hidden: 'invisible',
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}