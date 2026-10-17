/**
 * Compatibility wrapper for projects already importing the Pachmarhi page.
 * This file is intentionally tiny. The actual JSX lives in DestinationDetailPage.tsx.
 * Do not copy any layout markup for new destinations.
 */
import DestinationDetailPage, { type DestinationDetailPageProps } from './DestinationDetailPage';
import { pachmarhiContent } from './pachmarhiContent';
import type { DestinationDetailContent } from './destinationDetailTypes';

export type PachmarhiDestinationPageProps = Omit<DestinationDetailPageProps, 'content'> & {
  content?: DestinationDetailContent;
};

export default function PachmarhiDestinationPage({
  content = pachmarhiContent,
  ...props
}: PachmarhiDestinationPageProps) {
  return <DestinationDetailPage content={content} {...props} />;
}
