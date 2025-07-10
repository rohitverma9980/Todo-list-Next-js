import { TodoProvider } from '@/store/todo';
import React, { ReactNode } from 'react';
import './globals.css'; 
interface LayoutProps {
  children: ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <html>
      <body>

        <TodoProvider>
          {children}
        </TodoProvider>
      </body>
    </html>
  );
}
export default Layout;
  