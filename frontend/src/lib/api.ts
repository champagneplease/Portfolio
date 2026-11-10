import { Project, ContactFormData, ApiResponse } from '@/types/project';
import { PROJECTS_DATA } from './projects-data';

const defaultApiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://portfolio-back-production-55d2.up.railway.app/api'
    : 'http://localhost:4000/api';

const rawApiUrl = (process.env.NEXT_PUBLIC_API_URL || defaultApiUrl)
  .trim()
  .replace(/\/+$/, '');
const API_BASE_URL = rawApiUrl.endsWith('/api') ? rawApiUrl : `${rawApiUrl}/api`;

export async function fetchProjects(): Promise<{
  projects: Project[];
  fromApi: boolean;
}> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(3500),
    });

    if (res.ok) {
      const json: ApiResponse<Project[]> = await res.json();
      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        return { projects: json.data, fromApi: true };
      }
    }
  } catch (error) {
    // API is offline or unreachable - seamlessly fallback to local static data
    console.info('NestJS API not reached, using local fallback data:', (error as Error)?.message);
  }

  return { projects: PROJECTS_DATA, fromApi: false };
}

export async function submitContactMessage(
  data: ContactFormData,
): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(6000),
    });

    const json = await res.json();

    if (res.ok && json.success !== false) {
      return {
        success: true,
        message:
          json.data?.message ||
          '¡Mensaje recibido correctamente! Me pondré en contacto a la brevedad.',
      };
    } else {
      const errorMsg = Array.isArray(json.message)
        ? json.message.join('. ')
        : json.message || 'Error al enviar el mensaje. Intenta nuevamente.';
      return { success: false, message: errorMsg };
    }
  } catch (error) {
    console.error('Error enviando mensaje de contacto:', error);
    return {
      success: false,
      message:
        'No se pudo conectar con el servidor. Por favor, reintenta en unos instantes o escríbeme directamente a nachomirnd@gmail.com',
    };
  }
}

