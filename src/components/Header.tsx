import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavigationItem } from "../types/global";
import Button from "./Button";
import { LogIn, Menu, MenuIcon, UserRoundPlus, UserRoundPlusIcon, X } from "lucide-react";
import { se } from "date-fns/locale";

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { name: "Início", path: "/home" },
    { name: "Como Acessar", path: "/guide" },
    { name: "Agendar Consulta", path: "/appointment" },
    { name: "Dúvidas", path: "/doubt" },
    { name: "Suporte", path: "/support" },
    { name: "Sobre Nós", path: "/about" },
    { name: "Entrar", path: "/login" },
    { name: "Criar Conta", path: "/register" },
  ];

  const navigate = useNavigate();

  return (
    <header className="shadow-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-full p-4 bg-gradient-primary rounded-lg flex items-center justify-center">
              <img
                onClick={() => navigate("/home")}
                className="h-14 cursor-pointer"
                src="/logo-hc-conecta.png"
                alt="Logo HC Conecta"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex space-x-1">
          {navigationItems.map((item) =>
                item.name !== "Entrar" && item.name !== "Criar Conta" && (
                  <button
                    key={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate(item.path);
                    }}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-blue-700 text-white"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                ) 
              )}
          </nav>
          <div className="flex gap-3">
            <Button
              onClick={() => navigate("/login")}
              size="sm"
              className="hidden xl:flex gap-2 items-center justify-center "
              variant="outline"
            >
              {" "}
              <i>
                <LogIn size={18} />{" "}
              </i>{" "}
              Entrar{" "}
            </Button>
            <Button
              onClick={() => navigate("/register")}
              size="sm"
              className="hidden xl:flex gap-2 items-center text-white justify-center"
              variant="primary"
            >
              {" "}
              <i>
                <UserRoundPlus size={18} className="text-white" />{" "}
              </i>{" "}
              Criar Conta{" "}
            </Button>
          </div>
          {/* Mobile menu button */}
          {isMobileMenuOpen === false ? ( 
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-foreground hover:bg-accent"
            aria-label="Abrir menu"
          >
            <MenuIcon />
          </button>
          ): (
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-foreground hover:bg-accent"
            aria-label="Fechar menu"
          >
            <X />
          </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-border ">
            <nav className="space-y-2">
              {navigationItems.map((item) =>
                item.name !== "Entrar" && item.name !== "Criar Conta" ? (
                  <button
                    key={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate(item.path);
                    }}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-blue-700 text-white"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : item.name === "Entrar" ? (
                  <div className="flex items-center px-2 py-3 gap-2">
                    <i> <LogIn size={18} className="text-blue-700" /></i>
                    <button
                    key={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate(item.path);
                    }}
                    className="block rounded-lg font-medium transition-colors text-blue-700"
                  > {item.name} </button>
                  
                  </div>
              ) : (
                <div className="flex items-center px-2 py-3 gap-2">
                    <i> <UserRoundPlusIcon size={18} className="text-blue-700" /></i>
                    <button
                    key={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      navigate(item.path);
                    }}
                    className="block rounded-lg font-medium transition-colors text-blue-700 "
                  > {item.name} </button>
                  
                  </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
