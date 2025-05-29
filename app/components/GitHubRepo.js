// components/GitHubRepos.jsx
"use client";

import React, { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'gabssiin'; 

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);

      
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9`); 
        
        if (!response.ok) {
          throw new Error(`Erro ao buscar repositórios: ${response.statusText}`);
        }

        const data = await response.json();
        const userRepos = data.filter(repo => !repo.fork && !repo.archived); 
        setRepos(userRepos.slice(0, 6));
      } catch (err) {
        console.error("Erro ao buscar repositórios do GitHub:", err);
        setError("Não foi possível carregar os repositórios. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center p-10"> 
        <p>Carregando projetos do GitHub...</p>
       
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-400 text-center p-10">
        <p>{error}</p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="text-gray-400 text-center p-10">
        <p>Nenhum projeto público recente encontrado.</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-16"> 
      <h2 className="text-4xl font-bold mb-12 text-cyan-400 text-center">
        Meus Projetos Recentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
        {repos.map((repo) => (
          <a 
            key={repo.id} 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block p-6 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 group"
          >
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-300 truncate"> 
              {repo.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {repo.description || 'Sem descrição.'}
            </p>
            <div className="flex items-center text-gray-500 text-xs mt-auto"> 
              {repo.language && (
                <span className="mr-3 px-2 py-1 bg-slate-700 text-slate-300 rounded-full">
                  {repo.language}
                </span>
              )}
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
                </svg>
                {repo.stargazers_count}
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-12">
        <a 
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors duration-300 text-lg shadow-lg"
        >
          Ver Todos os Repositórios
        </a>
      </div>
    </section>
  );
}